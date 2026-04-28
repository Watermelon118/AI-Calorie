import type { FC } from 'react'
import { TabBar } from 'antd-mobile'
import Today from './pages/Today'
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import './demo2.less'

const Bottom: FC = () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    history.push(value)
  }

  const tabs = [
    {
      key: '/today',
      title: '今日',
      icon: <AppOutline />,
    },
    {
      key: '/records',
      title: '记录',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/aims',
      title: '目标',
      icon: <MessageOutline />,
    },
    {
      key: '/history',
      title: '历史',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

function App() {
  return (
    <Router initialEntries={['/today']}>
      <div className="app">
        <div className="top">
        </div>
        <div className="body">
          <Switch>
            <Route exact path='/today'>
              <Today />
            </Route>
            <Route exact path='/records'>
              <Records />
            </Route>
            <Route exact path='/aims'>
              <Aims />
            </Route>
            <Route exact path='/history'>
              <History />
            </Route>
          </Switch>
        </div>
        <div className="bottom">
          <Bottom />
        </div>
      </div>
    </Router>
  )
}


function Records() {
  return <div>记录</div>
}

function Aims() {
  return <div>目标</div>
}

function History() {
  return <div>历史</div>
}

export default App