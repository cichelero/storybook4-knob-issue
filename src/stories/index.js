import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Title from '../Title';

storiesOf('Knobs', module)
  .addDecorator(withKnobs)
  .add('Title', () => <Title text={text('text', "You're great!")} />);
