export const CodePenTransformer = {
  name: 'CodePen',
  shouldTransform(url: string) {
    const { host, pathname } = new URL(url)

    return ['codepen.io'].includes(host) && pathname.includes('/pen/')
  },
  getHTML(url: string) {
    const iframeUrl = url.replace('/pen/', '/embed/')
    console.log(url, iframeUrl)
    const iframeElement = `<iframe src="${iframeUrl}?default-tab=html%2Cresult" width="100%" height="200px" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>`
    console.log(iframeElement)
    return iframeElement
  },
}
