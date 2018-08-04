import { configure } from '@storybook/react'
import './../src/css/tailwind.css'


function loadStories() {
    require('./stories/Buttons.jsx')
    require('./stories/Cards.jsx')
    // You can require as many stories as you need.
}

configure(loadStories, module)
