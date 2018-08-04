import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import StoryRouter from 'storybook-react-router'

import {
    CardDefault,
    CardImage,
    CardCategory,
    CardPost,
    CardAuthor,
    CardComment,
    CardHorizontal,
    CardStacked,
    CardRow } from './../../src/Components'


storiesOf('Cards', module)
.addDecorator(StoryRouter())
.add('CardDefault', ()=> (
    <div className="max-w-md">
        <CardDefault>Hello, this is a default card</CardDefault>
    </div>
))

.add('CardImage', ()=> (
    <div className="max-w-sm">
        <CardImage select={ action('click select') }
                   delete={ action('click delete') }
                   imageUrl="https://www.financialsamurai.com/wp-content/uploads/2017/04/bmw-m4-white-black-728x331.jpg">
            Hello, this is a default card
        </CardImage>
    </div>
))

.add('CardCategory', ()=> (
    <div className="max-w-md">
        <CardCategory title="This is a category card"
                      postsCount={ 60 }
                      imageUrl="https://www.financialsamurai.com/wp-content/uploads/2017/04/bmw-m4-white-black-728x331.jpg">
            Hello, this is a default card
        </CardCategory>
    </div>
))

.add('CardPost', ()=> (
    <div className="max-w-md">
        <CardPost imageUrl="https://www.financialsamurai.com/wp-content/uploads/2017/04/bmw-m4-white-black-728x331.jpg"
                  title="This is a post card"
                  id={ 233 }
                  slug="post-slug"
                  onDelete={ action('click delte') }
                  author="Serban Blebea"
                  publishDate="20.08.2018"
                  content="Hello, this is a default card"
                  commentsCount={ 23 }>
            Hello, this is a default card
        </CardPost>
    </div>
))

.add('CardAuthor', ()=> (
    <div className="max-w-md">
        <CardAuthor imageUrl="https://www.financialsamurai.com/wp-content/uploads/2017/04/bmw-m4-white-black-728x331.jpg"
                    title="Serban Blebea"
                    subtitle="The best developer">
            Hello, this is an author card
        </CardAuthor>
    </div>
))

.add('CardComment', ()=> (
    <div className="max-w-md">
        <CardComment author="Serban Blebea"
                     subject="How are you?"
                     content="I just wanted to say hey"
                     isApproved={ true }
                     onApproveChange={ action('approved changed') } >
            Hello, this is a comment card
        </CardComment>
    </div>
))

.add('CardHorizontal', ()=> (
    <div className="max-w-md">
        <CardHorizontal imageUrl="https://www.financialsamurai.com/wp-content/uploads/2017/04/bmw-m4-white-black-728x331.jpg"
                        title="This is the title">
            Hello, this is a Horizontal card
        </CardHorizontal>
    </div>
))

.add('CardStacked', ()=> (
    <div className="max-w-md">
        <CardStacked imageUrl="https://www.financialsamurai.com/wp-content/uploads/2017/04/bmw-m4-white-black-728x331.jpg"
                     title="This is the title">
            Hello, this is a Stacked card
        </CardStacked>
    </div>
))

.add('CardRow', ()=> (
    <div className="max-w-md">
        <CardRow>
            Hello, this is a Stacked card
        </CardRow>
    </div>
))
