export const CodePenTransformer = {
  name: 'CodePen',
  shouldTransform(url: string) {
    const { host, pathname } = new URL(url)

    return ['codepen.io'].includes(host) && pathname.includes('/pen/')
  },
  getHTML(url: string) {
    return `<iframe src="${url.replace('/pen/', '/embed/')}?default-tab=html%2Cresult" width="100%" height="200px" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>`
  },
}
