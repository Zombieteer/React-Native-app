import React, {useState, useEffect} from 'react'
import {
    Text,
    View
  } from "react-native";

export const Reddit = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://www.reddit.com/.json', {
            Accept: 'application/json'
        })
        .then(res => res.json())
        .then(data => setPosts(data.data.children))
    })


    return (
        <View style={{marginTop: 50}}>
            <Text style={{marginBottom: 30}}>
                Reddit
            </Text>
            <View>
                {posts.map(post => (
                <Text>{post.data.author}</Text>)
                )}
            </View>
        </View>
    )
}

export default Reddit