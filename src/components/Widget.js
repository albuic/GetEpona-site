import React from 'react'
import WidgetBot from '@widgetbot/react-embed'

const discordBot = () => (
  <WidgetBot
    server="475789330380488707"
    channel="509533264206233610"
   shard="https://cl1.widgetbot.io"
    onAPI={(api) => {
      /*api.on('signIn', user => {
        console.log(`Guest signed in as ${user.name}`, user)
        api.emit('sendMessage', 'Hello world')
      })*/
    }}
  />
)

export default discordBot