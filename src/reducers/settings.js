import { TOGGLE_RECEIVE, TOGGLE_SOUND, TOGGLE_NOTICE, TOGGLE_SCREEN }
  from '../constants/actionTypes';
import { Map } from 'immutable';


/**
 * 设置数据
 * @param {object} state 默认state
 * @param {object} action action参数
 * @return {object} state
 */
export default function settings(state = Map({
    receive: true, sound: true, notice: true, screen: false
}), action) {
    switch (action.type) {
        case TOGGLE_RECEIVE:
            return state.update('receive', x => !x);
        case TOGGLE_SOUND:
            return state.update('sound', x => !x);
        case TOGGLE_NOTICE:
            return state.update('notice', x => !x);
        case TOGGLE_SCREEN:
            return state.update('screen', x => !x);
        default:
            return state;
    }
}
