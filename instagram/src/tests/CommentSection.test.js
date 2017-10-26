import React from 'react';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';

import CommentSection from '../CommentSection';
import postData from '../application-data';

describe('Comment Section', () => {
    it('should render an input tag', () => {
        const component = shallow(<CommentSection />);
        expect(component.find('input').length).toBe(1);
    });

    it('calls componentDidMount', () => {
        sinon.spy(CommentSection.prototype, 'componentDidMount');
        const component = mount(<CommentSection comments={postData[0].comments} />);
        expect(CommentSection.prototype.componentDidMount.calledOnce).toEqual(true);
    });

    it('should store comments in state', () => {
        const component = shallow(<CommentSection />);
        expect(component.state('comments')).toBeDefined();
    });

    it('adds comments to state upon mounting', () => {
        const component = mount(<CommentSection comments={postData[1].comments} />);
        expect(component.state('comments')).toEqual(postData[1].comments);
    });
});