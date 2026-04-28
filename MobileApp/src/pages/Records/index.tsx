import {
  CameraOutline,
  PictureOutline,
  StarFill,
} from 'antd-mobile-icons'
import './index.less'

function Records() {
  return (
    <div className='records-page'>
      <section className='records-hero'>
        <h1>记录食物</h1>
        <p>拍照识别食物，可配合文字补充说明</p>
      </section>

      <div className='records-actions'>
        <button className='records-action' type='button' aria-label='拍照记录食物'>
          <CameraOutline />
          <span>拍照</span>
        </button>

        <button className='records-action' type='button' aria-label='从相册选择食物图片'>
          <PictureOutline />
          <span>相册</span>
        </button>
      </div>

      <div className='records-divider'>
        <span />
        <em>或直接输入文字</em>
        <span />
      </div>

      <textarea
        className='records-textarea'
        aria-label='食物文字说明'
        placeholder='例如：一碗米饭、两个鸡蛋、昨天的晚餐'
      />

      <button className='records-submit' type='button'>
        <StarFill />
        <span>解析食物</span>
      </button>
    </div>
  )
}

export default Records
