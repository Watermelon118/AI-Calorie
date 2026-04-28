import { useState } from 'react'
import {
  CalendarOutline,
  CameraOutline,
  LeftOutline,
  PictureOutline,
  ArrowDownCircleOutline,
  RightOutline,
  SetOutline,
  StarFill,
} from 'antd-mobile-icons'
import './index.less'

type HistoryView = 'list' | 'detail'

function History() {
  const [advisorOpen, setAdvisorOpen] = useState(false)
  const [view, setView] = useState<HistoryView>('list')
  const [makeupOpen, setMakeupOpen] = useState(false)

  const closeDetail = () => {
    setMakeupOpen(false)
    setView('list')
  }

  return (
    <div className={`history-page ${view === 'detail' ? 'history-detail-page' : ''}`}>
      {view === 'list' ? (
        <>
          <div className='history-toolbar'>
            <button
              className='history-advisor'
              type='button'
              aria-label='打开 AI 顾问'
              onClick={() => setAdvisorOpen(true)}
            >
              <StarFill />
              <span>AI顾问</span>
            </button>
          </div>

          <h1>历史记录</h1>

          <button
            className='history-summary-card'
            type='button'
            aria-label='查看今天的历史记录'
            onClick={() => setView('detail')}
          >
            <div className='history-card-head'>
              <strong>今天</strong>
              <span>2项</span>
            </div>

            <div className='history-card-body'>
              <div className='history-calories'>
                <span className='utensil-icon' aria-hidden='true'>
                  <i />
                  <b />
                </span>
                <strong>406</strong>
              </div>

              <div className='history-deficit'>
                <ArrowDownCircleOutline />
                <span>缺口1,594</span>
              </div>

              <div className='history-nutrition'>
                <span className='protein'>
                  蛋白
                  <em>5.0g</em>
                </span>
                <span className='carbs'>
                  碳水
                  <em>71.0g</em>
                </span>
                <span className='fat'>
                  脂肪
                  <em>12.2g</em>
                </span>
              </div>

              <RightOutline className='history-chevron' />
            </div>
          </button>
        </>
      ) : (
        <HistoryDayDetail
          onBack={closeDetail}
          onOpenMakeup={() => setMakeupOpen(true)}
        />
      )}

      <div className={`advisor-sheet-layer ${advisorOpen ? 'open' : ''}`}>
        <div className='advisor-sheet-scrim' />
        <section className='advisor-sheet' aria-hidden={!advisorOpen}>
          <header className='advisor-sheet-header'>
            <h2>AI顾问</h2>
            <button
              className='advisor-done'
              type='button'
              onClick={() => setAdvisorOpen(false)}
            >
              完成
            </button>
          </header>

          <div className='advisor-message'>
            <p>嗨～我是你的营养小助手 🥗</p>
            <p>我已经看到你的目标和饮食记录啦，随时可以帮你分析！</p>
            <p>
              试着问我：<br />
              · 我最近吃得怎么样？<br />
              · 照这个节奏多久能达标？<br />
              · 有什么建议给我吗？
            </p>
          </div>

          <div className='advisor-input-bar'>
            <input type='text' placeholder='问问AI顾问...' aria-label='询问 AI 顾问' />
            <button type='button' aria-label='发送问题'>
              <span className='advisor-send-arrow' aria-hidden='true' />
            </button>
          </div>
        </section>
      </div>

      <div className={`makeup-sheet-layer ${makeupOpen ? 'open' : ''}`}>
        <div className='makeup-sheet-scrim' />
        <section className='makeup-sheet' aria-hidden={!makeupOpen}>
          <div className='makeup-toolbar'>
            <button className='makeup-cancel' type='button' onClick={() => setMakeupOpen(false)}>
              取消
            </button>
            <button className='makeup-settings' type='button' aria-label='补录设置'>
              <SetOutline />
            </button>
          </div>

          <h2>补录食物</h2>

          <div className='makeup-date-banner'>
            <span className='makeup-calendar' aria-hidden='true'>
              <CalendarOutline />
              <i />
            </span>
            <strong>正在为 4月28日 补录食物</strong>
          </div>

          <p className='makeup-tip'>拍照识别食物，可配合文字补充说明</p>

          <div className='makeup-actions'>
            <button className='makeup-action' type='button' aria-label='拍照补录食物'>
              <CameraOutline />
              <span>拍照</span>
            </button>

            <button className='makeup-action' type='button' aria-label='从相册选择补录食物图片'>
              <PictureOutline />
              <span>相册</span>
            </button>
          </div>

          <div className='makeup-divider'>
            <span />
            <em>或直接输入文字</em>
            <span />
          </div>

          <textarea
            className='makeup-textarea'
            aria-label='补录食物文字说明'
            placeholder='例如：一碗米饭、两个鸡蛋、昨天的晚餐'
          />

          <button className='makeup-submit' type='button'>
            <StarFill />
            <span>解析食物</span>
          </button>
        </section>
      </div>
    </div>
  )
}

function HistoryDayDetail({
  onBack,
  onOpenMakeup,
}: {
  onBack: () => void
  onOpenMakeup: () => void
}) {
  return (
    <>
      <header className='history-detail-header'>
        <button className='detail-back' type='button' aria-label='返回历史记录' onClick={onBack}>
          <LeftOutline />
        </button>
        <h1>今天</h1>
        <button className='detail-makeup' type='button' onClick={onOpenMakeup}>
          <span className='detail-plus' aria-hidden='true' />
          <em>补录</em>
        </button>
      </header>

      <section className='detail-intake-card'>
        <h2>总摄入</h2>
        <div className='detail-calorie-value'>406</div>
        <div className='detail-calorie-unit'>千卡</div>

        <div className='detail-macro-grid'>
          <div className='detail-macro protein'>
            <span>蛋白质</span>
            <strong>5.0</strong>
            <em>g</em>
          </div>

          <div className='detail-macro carbs'>
            <span>碳水</span>
            <strong>71.0</strong>
            <em>g</em>
          </div>

          <div className='detail-macro fat'>
            <span>脂肪</span>
            <strong>12.2</strong>
            <em>g</em>
          </div>
        </div>
      </section>

      <section className='food-detail-section'>
        <div className='food-detail-heading'>
          <h2>食物明细</h2>
          <span>长按可删除</span>
        </div>

        <div className='food-list'>
          <div className='food-row'>
            <div>
              <strong>草莓蛋糕</strong>
              <span>120.0g · 16:25</span>
            </div>
            <em>360 kcal</em>
          </div>

          <div className='food-row'>
            <div>
              <strong>椰子水</strong>
              <span>200.0g · 16:25</span>
            </div>
            <em>46 kcal</em>
          </div>
        </div>
      </section>
    </>
  )
}

export default History
