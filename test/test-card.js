import React from 'react';
import TestUtils from 'react-addons-test-utils';
import chai from 'chai';

const should = chai.should();

import Card from '../js/components/card';

describe('Card component', function(){
	it('Renders the card Id and text', function(){
		const card = {
		id: 1,
		text : "Hey dude"
	}

		const renderer = TestUtils.createRenderer();
		renderer.render(<Card card={card}/>);
		const result = renderer.getRenderOutput();
		result.props.className.should.equal('card');
	})
})