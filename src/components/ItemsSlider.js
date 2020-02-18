import React, {Component} from 'react';
import ItemsCarousel from 'react-items-carousel';
import TrendingItem from "./Items/TrendingItem";

import PropTypes from 'prop-types';
import MovieItem from "./Items/MovieItem";
import TvShowItem from "./Items/TvShowItem";

class ItemSlider extends Component {

    componentWillMount() {
        this.setState({
            activeItemIndex: 0,
        });
    }

    createChildren = (type, children) => {
        switch (type) {
            case 'trending':
                return children.map(child => <TrendingItem key={child.id} style={{ height: 250 }} trendItem={child}/>);
            case 'movies':
                return children.map(child => <MovieItem key={child.id} style={{ height: 250 }} movieItem={child}/>);
            case 'tvShows':
                return children.map(child => <TvShowItem key={child.id} style={{ height: 250 }} tvShowItem={child}/>)
            default:
                return children.map(child => <TrendingItem key={child.id} style={{ height: 250 }} trendItem={child}/>);
        }
    }

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });

    render() {
        const {
            activeItemIndex
        } = this.state;

        const {children, type} =  this.props;

        const childrenList = children.length ? this.createChildren(type, children) : []

        return (
            <ItemsCarousel
                classes={{
                    wrapper: 'customs-slider-big-wrapper',
                    itemsWrapper: 'slider-wrapper',
                    itemsInnerWrapper: 'custom-inner-items-wrapper',
                    rightChevronWrapper: 'right-chevron-wrapper',
                    leftChevronWrapper: 'left-chevron-wrapper'
                }}
                // Carousel configurations
                numberOfCards={5}
                gutter={12}
                showSlither={true}
                firstAndLastGutter={true}
                freeScrolling={false}

                // Active item configurations
                requestToChangeActive={this.changeActiveItem}
                activeItemIndex={activeItemIndex}
                activePosition={'center'}

                chevronWidth={24}
                rightChevron={'>'}
                leftChevron={'<'}
                outsideChevron={false}
            >
                {childrenList}
            </ItemsCarousel>
        );
    }
}

ItemSlider.propTypes = {
    children: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired
};

export default ItemSlider;