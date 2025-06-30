import { useEffect } from 'react'
import liff from '@line/liff'

function App() {
  useEffect(() => {
    liff.init({ liffId: "あなたのLIFF ID" })  // ←差し替えてね
  }, [])

  const sendEmotion = (emoji) => {
    liff.sendMessages([
      {
        type: 'text',
        text: `今日の気分は ${emoji} だよ`,
      },
    ]).then(() => {
      liff.closeWindow()
    })
  }

  return (
    <div>
      <h2>📊 今日の気分を選んでね</h2>
      <button onClick={() => sendEmotion('😊')}>😊 元気</button>
      <button onClick={() => sendEmotion('😢')}>😢 悲しい</button>
      <button onClick={() => sendEmotion('😡')}>😡 イライラ</button>
      <button onClick={() => sendEmotion('😔')}>😔 疲れた</button>
      <button onClick={() => sendEmotion('🫥')}>🫥 無気力</button>
      <button onClick={() => sendEmotion('🙂')}>🙂 まあまあ</button>
    </div>
  )
}

export default App