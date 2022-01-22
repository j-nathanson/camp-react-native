import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';
import { PROMOTIONS } from '../shared/promotions';
import { PARTNERS } from '../shared/partners';

// In this lesson, you updated the Home component so that it retrieves the featured campsite, promotion, and partner from data files, then uses the data to build three separate Card components using a new custom component called RenderItem. 

// scroll view lazy loading on renders what is on screen more efficient, content off screen is not in memory
//  flat list doesn't

// Card creator
function RenderItem({ item }) {
    if (item) {
        return (
            <Card
                featuredTitle={item.name}
                image={require('./images/react-lake.jpg')}
            >
                <Text style={{ margin: 10 }}>
                    {item.description}
                </Text>
            </Card>
        );
    }
    return <View />;
}

//Render a card for each 'featured' object from each data group 
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            promotions: PROMOTIONS,
            partners: PARTNERS
        };
    }

    // top navbar title
    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.campsites.filter(campsite => campsite.featured)[0]}
                />
                <RenderItem
                    item={this.state.promotions.filter(promotion => promotion.featured)[0]}
                />
                <RenderItem
                    item={this.state.partners.filter(partner => partner.featured)[0]}
                />
            </ScrollView>
        );
    }
}

export default Home;