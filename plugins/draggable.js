// plugins/draggable.js
export default {
  bind(el) {
    let initialX = 0;
    let initialY = 0;
    let offsetX = 0;
    let offsetY = 0;
    let dragging = false;

    function startDrag(e) {
      dragging = true;
      initialX = e.clientX - offsetX;
      initialY = e.clientY - offsetY;
    }

    function drag(e) {
      if (!dragging) return;
      e.preventDefault();

      let newX = e.clientX - initialX;
      let newY = e.clientY - initialY;
      let { width, height } = el.getBoundingClientRect();
      let viewWidth = document.documentElement.clientWidth;
      let viewHeight = document.documentElement.clientHeight;

      offsetX = Math.min(Math.max(0, newX), viewWidth - width);
      offsetY = Math.min(Math.max(0, newY), viewHeight - height);

      el.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    }

    function endDrag() {
      dragging = false;
    }

    el.addEventListener("mousedown", startDrag);
    document.addEventListener("mousemove", drag);
    document.addEventListener("mouseup", endDrag);

    el.$destroy = () => {
      el.removeEventListener("mousedown", startDrag);
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", endDrag);
    };
  },
  unbind(el) {
    el.$destroy();
  },
};
