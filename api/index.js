import loginApi from './loginApi'
import pluginApi from './PluginApi'

export default function ($api) {
  const login = loginApi($api)
  const plugin = pluginApi($api)

  return {
    ...login,
    ...plugin
  }
}
