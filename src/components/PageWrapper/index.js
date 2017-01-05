import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './anim.css'


const default_time = 700

/**
 * 路由index属性 或者路由参数level决定动画是进入还是退出
 * 路由animin animout属性决定动画效果
 * 路由animintime animouttime属性决定动画时间
 */
class PageWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            transition: 'default',
            anim: false,
            time: default_time
        }
    }
    componentWillReceiveProps(nextProps) {

        const from = this.props.location ? this.props.location.pathname : 'null'
        const to = nextProps.location ? nextProps.location.pathname : 'null'

        if (from !== to) { //路由发生了改变
            // 获取当前子节点的index属性
            const thisIndex = this.props.children ? this.props.children.props.route.index : 0
            // 获取将要切换子节点的index属性
            const nextIndex = nextProps.children ? nextProps.children.props.route.index : 0

            // 获取动画设置
            const defaultAnimIn = this.props.route.animin ? this.props.route.animin : 'show'
            const defaultAnimOut = this.props.route.animout ? this.props.route.animout : 'dismiss'
            const animIn = nextProps.children.props.route.animin ? nextProps.children.props.route.animin : defaultAnimIn
            const animOut = nextProps.children.props.route.animout ? nextProps.children.props.route.animout : defaultAnimOut

            // 获取动画时间设置
            const defaultAnimInTime = this.props.route.animintime ? this.props.route.animintime : default_time
            const defaultAnimOutTime = this.props.route.animouttime ? this.props.route.animouttime : default_time
            const animInTime = nextProps.children.props.route.animintime ? nextProps.children.props.route.animintime : defaultAnimInTime
            const animOutTime = nextProps.children.props.route.animouttime ? nextProps.children.props.route.animouttime : defaultAnimOutTime

            let anim = false
            if (this.props.children.props.route.path === nextProps.children.props.route.path) {
                //如果是相同的路由就通过在路由中添加level参数来判断动画效果
                const thisLevel = this.props.children.props.routeParams.level
                const nextLevel = nextProps.children.props.routeParams.level
                const transition = nextLevel - thisLevel > 0 ? animIn : (nextLevel - thisLevel === 0 ? '' : animOut)
                const time = nextLevel - thisLevel > 0 ? animInTime : (nextLevel - thisLevel === 0 ? 0 : animOutTime)
                anim = nextLevel !== thisLevel
                this.setState({ transition, anim, time })
            } else {
                const transition = nextIndex - thisIndex > 0 ? animIn : (nextIndex - thisIndex === 0 ? '' : animOut)
                const time = nextIndex - thisIndex > 0 ? animInTime : (nextIndex - thisIndex === 0 ? 0 : animOutTime)
                anim = nextIndex !== thisIndex
                this.setState({ transition, anim, time })
            }
        }
    }
    render() {
        const { transition, anim, time } = this.state
        const { location: { pathname } } = this.props
        return (
            <ReactCSSTransitionGroup
                transitionName={transition}
                transitionEnter={anim}
                transitionLeave={anim}
                transitionEnterTimeout={time}
                transitionLeaveTimeout={time}>
                {this.props.children && React.cloneElement(this.props.children, { key: pathname })}
            </ReactCSSTransitionGroup>
        );
    }
}

export default PageWrapper;