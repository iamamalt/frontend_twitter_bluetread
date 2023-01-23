import React from "react";
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Thumbnail,
} from "native-base";

const TwitterCard = (props) => {
  return (
    <Card>
      <CardItem>
        <Thumbnail source={{ uri: props.tweet.profile_image_url }} />
        <Text>{props.tweet.name}</Text>
        <Text note>{props.tweet.created_at}</Text>
      </CardItem>
      <CardItem>
        <Text>{props.tweet.text}</Text>
      </CardItem>
    </Card>
  );
};

const TwitterCardList = (props) => {
  return (
    <Container>
      <Content>
        {props.tweets.map((tweet, index) => (
          <TwitterCard key={index} tweet={tweet} />
        ))}
      </Content>
    </Container>
  );
};

export default TwitterCardList;
