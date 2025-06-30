import { useEffect } from 'react'
import liff from '@line/liff'

function App() {
  // LIFFの初期化
  useEffect(() => {
    liff.init({ liffId: "2007667332-9wmkBzAo" }).catch((err) => {
      console.error("LIFF init failed", err)
    })
  }, [])

  // 感情を送信
  const sendEmotion = async (emoji) => {
    try {
      await liff.sendMessages([
        {
          type: 'text',
          text: `今日の気分は ${emoji} だよ`,
        },
      ])
      liff.closeWindow()
    } catch (e) {
      alert('送信に失敗しました: ' + e.message)
      console.error(e)
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>📊 今日の気分を選んでね</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={() => sendEmotion('😊')}>😊 元気</button>
        <button onClick={() => sendEmotion('😢')}>😢 悲しい</button>
        <button onClick={() => sendEmotion('😡')}>😡 イライラ</button>
        <button onClick={() => sendEmotion('😔')}>😔 疲れた</button>
        <button onClick={() => sendEmotion('🫥')}>🫥 無気力</button>
        <button onClick={() => sendEmotion('🙂')}>🙂 まあまあ</button>
      </div>
    </div>
  )
}

export default App