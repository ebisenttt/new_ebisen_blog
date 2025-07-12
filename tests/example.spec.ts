import { test, expect } from '@playwright/test'

test('トップページでconsoleに警告・エラーが出ていないこと', async ({
  page,
}) => {
  const messages: { type: string; text: string }[] = []
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      messages.push({ type: msg.type(), text: msg.text() })
    }
  })
  await page.goto('http://localhost:3000/')
  // 必要に応じてページの描画完了を待つ
  await page.waitForLoadState('networkidle')
  expect(messages).toEqual([])
})
