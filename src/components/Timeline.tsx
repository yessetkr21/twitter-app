import { useState } from 'react';
import { TweetComposer } from './TweetComposer';
import { Tweet } from './Tweet';

interface TweetData {
  id: string;
  username: string;
  handle: string;
  content: string;
  timestamp: string;
  likes: number;
  retweets: number;
  replies: number;
  verified?: boolean;
}

const initialTweets: TweetData[] = [
  {
    id: '1',
    username: 'Naval',
    handle: 'naval',
    content: 'Son las personas que más quieren ser vistas como desinteresadas las que más debes preocuparte.',
    timestamp: '20 jul',
    likes: 2800,
    retweets: 318,
    replies: 204,
    verified: true,
  },
  {
    id: '2',
    username: 'NASIRU',
    handle: 'jamnasboi',
    content: 'Este tipo 😂😂😂',
    timestamp: '58m',
    likes: 1240,
    retweets: 89,
    replies: 45,
    verified: false,
  },
  {
    id: '3',
    username: 'Tech News',
    handle: 'technews',
    content: 'Breaking: La nueva actualización de React incluye mejoras significativas en el rendimiento y nuevas características para desarrolladores.',
    timestamp: '2h',
    likes: 856,
    retweets: 124,
    replies: 67,
    verified: true,
  },
];

export function Timeline() {
  const [tweets, setTweets] = useState<TweetData[]>(initialTweets);

  const handleNewTweet = (content: string) => {
    const newTweet: TweetData = {
      id: Date.now().toString(),
      username: 'Usuario',
      handle: 'usuario',
      content,
      timestamp: 'ahora',
      likes: 0,
      retweets: 0,
      replies: 0,
      verified: false,
    };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-x-border p-4 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Inicio</h1>
          <div className="flex space-x-8">
            <button className="text-foreground border-b-2 border-primary pb-4">
              Para ti
            </button>
            <button className="text-x-text-secondary hover:text-foreground pb-4">
              Siguiendo
            </button>
          </div>
        </div>
      </div>

      {/* Tweet Composer */}
      <TweetComposer onTweet={handleNewTweet} />

      {/* Timeline */}
      <div>
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            id={tweet.id}
            username={tweet.username}
            handle={tweet.handle}
            content={tweet.content}
            timestamp={tweet.timestamp}
            likes={tweet.likes}
            retweets={tweet.retweets}
            replies={tweet.replies}
            verified={tweet.verified}
          />
        ))}
      </div>
    </div>
  );
}