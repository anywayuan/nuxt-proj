<template>
  <div class="page-main">
    <div class="drag-list">
      <draggable v-model="dragItems" group="shared" :clone="clone" class="list-group">
        <div class="drag" v-for="item in dragItems" :key="item.id">{{item.name}}</div>
      </draggable>
    </div>
    <div class="result">
      <draggable v-model="resultItems" group="shared" class="list-group">
        <div class="drag" v-for="item in resultItems" :key="item.id">{{item.name}}</div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  data() {
    return {
      dragItems: [
        { id: 1, name: "drag1" },
        { id: 2, name: "drag2" },
        { id: 3, name: "drag3" },
        { id: 4, name: "drag4" },
        { id: 5, name: "drag5" }
      ],
      resultItems: []
    };
  },
  methods: {
    clone(item) {
      return { ...item };
    }
  }
};
</script>

<style scoped>
.page-main {
  display: flex;
}

.list-group {
  min-height: 100px;
  width: 300px;
  padding: 10px;
  margin-right: 20px;
  background: linear-gradient(90deg, #f6d365 0%, #fda085 100%);
  display: flex;
  flex-direction: column;
}

.drag {
  width: 100%;
  height: 42px;
  border-radius: 10px;
  color: #fff;
  line-height: 42px;
  text-align: center;
  background-color: #008c8c;
  margin-bottom: 10px;
  cursor: move;
}

.drag::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  display: none;
}

.drag[draggable]:active::after {
  display: block;
}
</style>
