import React, { Suspense, useState } from 'react'
import Overview from './components/Overview';

const Report = React.lazy(() => import('./components/Report'))
const Analytics = React.lazy(() => import('./components/Analytics'))


export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('overview')
    const [show, setShow] = useState(false)
  return (
    <div>
        <div>
            <button onClick={() => setActiveTab('overview')}>Overview</button>
            <button onClick={() => setActiveTab('analytics')}>Advanced Analytics</button>
            <button onClick={() => setShow(true)}>Export Report</button>
        </div>

        {activeTab==="overview" && <Overview/>}

        <Suspense fallback={<h2>Loading...</h2>}>
            {activeTab==="analytics" && <Analytics/>}
        </Suspense>

        <Suspense fallback={<h2>Loading...</h2>}>
            {show && (
                <Report/>
            )}
        </Suspense>
    </div>
  )
}
