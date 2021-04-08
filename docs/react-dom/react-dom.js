const ReactDOM: Object = {
  createPortal: function createPortal(
    children: ReactNodeList,
    containerInfo: any,
    // TODO: figure out the API for cross-renderer implementation.
    implementation: any,
    key: ?string = null
  ): ReactPortal {
    return {
      // This tag allow us to uniquely identify this as a React Portal
      $$typeof: REACT_PORTAL_TYPE,
      key: key == null ? null : '' + key,
      children,
      containerInfo,
      implementation
    }
  },

  // ...
  hydrate(element: React$Node, container: DOMContainer, callback: ?Function) {
    return legacyRenderSubtreeIntoContainer(
      null,
      element,
      container,
      true,
      callback
    )
  },

  render(
    element: React$Element<any>,
    container: DOMContainer,
    callback: ?Function
  ) {
    return legacyRenderSubtreeIntoContainer(
      null,
      // EXPLAIN React.CreateElement
      element,
      // document.getElementById('app')
      container,
      false,
      callback
    )
  },

  unstable_batchedUpdates: batchedUpdates,

  unstable_interactiveUpdates: interactiveUpdates,

  flushSync: flushSync
  // ...
}
