import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { ButtonDefault } from './../../src/Components'

storiesOf('Buttons', module)
.add('ButtonDefault', () => (
    <ButtonDefault click={ action('clicked') }>Hello Button</ButtonDefault>
))
