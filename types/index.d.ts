export interface PluginConfig {
  lock?: boolean
  listenTo?: string | string[]
  defaultTime?: string | number
  fireOnEmpty?: boolean,
  cancelOnEmpty?: boolean,
  trim?: boolean
}

interface DirectiveObject {
  [key: string]: (el: HTMLElement, binding: any, vnode: any) => void
}

interface DebounceInstance<A extends unknown[]> {
  (...args: A): void | Promise<void>,
  cancel(): void,
}

interface Debounce {
  <A extends unknown[]>(fn: (...args: A) => void | Promise<void>, wait: number | string): DebounceInstance<A>
}

declare const debounce: Debounce

export interface PluginObject {
  // We could type the Vue object here instead of "any" but that would require making Vue a devDependency and it doesn't seem worth it.
  // Considering a user of this code will never call install directly, it will be called by Vue.
  install (Vue: any, pluginConfig?: PluginConfig): void
}

declare const pluginObject: PluginObject

export { debounce, DebounceInstance, DirectiveObject }
export default pluginObject
