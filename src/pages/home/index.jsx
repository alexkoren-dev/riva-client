import React from 'react'
import { Card, List } from 'antd'

const Home = () => {
  return (
    <div className="my-home-doc">
      <Card title="TEST DOCS">
        <List>
          <List.Item key="1">
            <List.Item.Meta
              title={'Doc detail title'}
              description={
                <pre>
                  <code>{`
                ├── public
                ├── src
                │   ├── apis
                │   ├── component
                │   │   └── test-component
                │   ├── hooks
                │   ├── pages
                │   │   ├── docs
                │   │   └── test-page
                │   ├── store
                │   └── utils
                └── webpack`}</code>
                </pre>
              }
            />
          </List.Item>
        </List>
      </Card>
    </div>
  )
}

export default Home
