import { useState } from 'react';
import { Image, Smile, Calendar, MapPin, User } from 'lucide-react';
import { Button } from './ui/button';

interface TweetComposerProps {
  onTweet: (content: string) => void;
}

export function TweetComposer({ onTweet }: TweetComposerProps) {
  const [content, setContent] = useState('');
  const maxLength = 280;

  const handleSubmit = () => {
    if (content.trim()) {
      onTweet(content);
      setContent('');
    }
  };

  const remainingChars = maxLength - content.length;
  const isOverLimit = remainingChars < 0;

  return (
    <div className="border-b border-x-border p-4">
      <div className="flex space-x-3">
        <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
          <User className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="¿Qué está pasando?"
            className="w-full bg-transparent text-xl placeholder-x-text-secondary resize-none border-none outline-none min-h-[120px]"
          />
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-4">
              <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                <Image className="w-5 h-5" />
              </button>
              <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                <Smile className="w-5 h-5" />
              </button>
              <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                <Calendar className="w-5 h-5" />
              </button>
              <button className="text-primary hover:bg-primary/10 p-2 rounded-full transition-colors">
                <MapPin className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center space-x-3">
              <span 
                className={`text-sm ${
                  isOverLimit ? 'text-destructive' : 
                  remainingChars <= 20 ? 'text-orange-500' : 'text-x-text-secondary'
                }`}
              >
                {remainingChars}
              </span>
              <Button
                onClick={handleSubmit}
                disabled={!content.trim() || isOverLimit}
                className="bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed rounded-full px-6"
              >
                Postear
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}