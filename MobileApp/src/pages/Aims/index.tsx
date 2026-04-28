import { useState } from 'react'
import {
  AddCircleOutline,
  CalendarOutline,
  RightOutline,
  SetOutline,
} from 'antd-mobile-icons'
import './index.less'

type ActiveSheet = 'weight' | 'goal' | null

function Aims() {
  const [activeSheet, setActiveSheet] = useState<ActiveSheet>(null)

  const openWeightSheet = () => {
    setActiveSheet('weight')
  }

  const openGoalSheet = () => {
    setActiveSheet('goal')
  }

  const closeSheet = () => {
    setActiveSheet(null)
  }

  return (
    <div className='aims-page'>
      <div className='aims-toolbar'>
        <button className='aims-pill weight-record' type='button' onClick={openWeightSheet}>
          <AddCircleOutline />
          <span>记录体重</span>
        </button>

        <button className='aims-pill unit-setting' type='button' onClick={openGoalSheet}>
          <span className='unit-badge'>kg</span>
          <SetOutline />
        </button>
      </div>

      <h1>目标</h1>

      <section className='aims-card trend-card'>
        <h2>体重趋势</h2>

        <div className='weight-empty'>
          <div className='scale-icon' aria-hidden='true'>
            <span />
          </div>
          <div className='empty-title'>暂无体重数据</div>
          <div className='empty-desc'>请确保VeSync已同步到健康App</div>
        </div>
      </section>

      <section className='aims-card progress-card'>
        <h2>目标进度</h2>
        <div className='progress-empty'>暂无体重数据</div>
        <button className='manual-weight' type='button' onClick={openWeightSheet}>
          手动记录体重
        </button>
      </section>

      <div className={`aims-sheet-layer ${activeSheet === 'weight' ? 'open' : ''}`}>
        <div className='aims-sheet-scrim' />
        <section className='aims-sheet weight-sheet' aria-hidden={activeSheet !== 'weight'}>
          <div className='sheet-header'>
            <button className='sheet-cancel' type='button' onClick={closeSheet}>
              取消
            </button>
            <h2>记录体重</h2>
          </div>

          <div className='sheet-field'>
            <label>体重</label>
            <div className='weight-input-card'>
              <span>70</span>
              <em>kg</em>
            </div>
          </div>

          <div className='sheet-field date-field'>
            <label>日期</label>
            <div className='date-card'>
              <span>记录日期</span>
              <em>28 Apr 2026</em>
            </div>
          </div>

          <button className='sheet-save' type='button'>
            保存
          </button>
        </section>
      </div>

      <div className={`aims-sheet-layer ${activeSheet === 'goal' ? 'open' : ''}`}>
        <div className='aims-sheet-scrim' />
        <section className='aims-sheet goal-sheet' aria-hidden={activeSheet !== 'goal'}>
          <div className='sheet-header goal-sheet-header'>
            <button className='sheet-cancel' type='button' onClick={closeSheet}>
              取消
            </button>
            <h2>设置目标</h2>
          </div>

          <div className='goal-section'>
            <h3>身体信息</h3>
            <div className='goal-card goal-list-card'>
              <div className='goal-row'>
                <span>身高</span>
                <em><strong>170</strong> cm</em>
              </div>
              <div className='goal-divider' />
              <div className='goal-row'>
                <span>年龄</span>
                <em><strong>30</strong> 岁</em>
              </div>
              <div className='goal-divider' />
              <div className='goal-row'>
                <span>性别</span>
                <em className='goal-muted'>男 <span>⌄</span></em>
              </div>
            </div>
          </div>

          <div className='goal-section'>
            <h3>目标设置</h3>
            <div className='goal-card target-card'>
              <div className='goal-row'>
                <span>目标体重</span>
                <em><strong>65</strong> kg</em>
              </div>
              <div className='goal-divider' />
              <div className='goal-date-link'>
                <CalendarOutline />
                <span>设置目标日期</span>
              </div>
            </div>
          </div>

          <div className='goal-section'>
            <h3>活动水平</h3>
            <div className='goal-card activity-card'>
              <span>日常活动量</span>
              <em>中度（每周3-5次运动）</em>
              <RightOutline />
            </div>
          </div>

          <div className='goal-card intake-card'>
            <div className='intake-title'>建议每日摄入</div>
            <div className='intake-values'>
              <div className='intake-item green'>
                <strong>2,007</strong>
                <span>推荐摄入</span>
              </div>
              <div className='intake-item orange'>
                <strong>2,507</strong>
                <span>每日消耗</span>
              </div>
              <div className='intake-item blue'>
                <strong>500</strong>
                <span>热量缺口</span>
              </div>
            </div>
            <div className='intake-note'>* 基于预估当前体重 70.0 kg 计算</div>
          </div>

          <button className='goal-save' type='button'>
            保存目标
          </button>
        </section>
      </div>
    </div>
  )
}

export default Aims
