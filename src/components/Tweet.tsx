import { useState } from 'react';
import { Heart, MessageCircle, Repeat2, Share, MoreHorizontal, User } from 'lucide-react';

interface TweetProps {
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

export function Tweet({ 
  id, 
  username, 
  handle, 
  content, 
  timestamp, 
  likes: initialLikes, 
  retweets: initialRetweets, 
  replies,
  verified = false 
}: TweetProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isRetweeted, setIsRetweeted] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [retweets, setRetweets] = useState(initialRetweets);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleRetweet = () => {
    setIsRetweeted(!isRetweeted);
    setRetweets(prev => isRetweeted ? prev - 1 : prev + 1);
  };

  return (
    <article className="border-b border-x-border p-4 hover:bg-x-hover/30 transition-colors cursor-pointer animate-fade-in">
      <div className="flex space-x-3">
        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
          <User className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h3 className="font-bold hover:underline">{username}</h3>
            {verified && (
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xs text-primary-foreground">✓</span>
              </div>
            )}
            <span className="text-x-text-secondary">@{handle}</span>
            <span className="text-x-text-secondary">·</span>
            <span className="text-x-text-secondary">{timestamp}</span>
            <button className="ml-auto text-x-text-secondary hover:text-foreground">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-2">
            <p className="text-foreground whitespace-pre-wrap">{content}</p>
          </div>
          
          <div className="flex items-center justify-between mt-3 max-w-md">
            <button className="flex items-center space-x-2 text-x-text-secondary hover:text-primary transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <span className="text-sm">{replies}</span>
            </button>
            
            <button 
              onClick={handleRetweet}
              className={`flex items-center space-x-2 transition-colors group ${
                isRetweeted ? 'text-green-500' : 'text-x-text-secondary hover:text-green-500'
              }`}
            >
              <div className="p-2 rounded-full group-hover:bg-green-500/10 transition-colors">
                <Repeat2 className="w-5 h-5" />
              </div>
              <span className="text-sm">{retweets}</span>
            </button>
            
            <button 
              onClick={handleLike}
              className={`flex items-center space-x-2 transition-colors group ${
                isLiked ? 'text-red-500' : 'text-x-text-secondary hover:text-red-500'
              }`}
            >
              <div className="p-2 rounded-full group-hover:bg-red-500/10 transition-colors">
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current animate-pulse-like' : ''}`} />
              </div>
              <span className="text-sm">{likes}</span>
            </button>
            
            <button className="flex items-center space-x-2 text-x-text-secondary hover:text-primary transition-colors group">
              <div className="p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                <Share className="w-5 h-5" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}