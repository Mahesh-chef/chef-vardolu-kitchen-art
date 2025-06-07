
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RunwareService, GeneratedImage } from '@/services/runwareService';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

interface AIImageGeneratorProps {
  onImageGenerated: (imageUrl: string) => void;
  prompt: string;
  buttonText?: string;
  size?: { width: number; height: number };
}

const AIImageGenerator = ({ 
  onImageGenerated, 
  prompt, 
  buttonText = "Generate AI Image",
  size = { width: 512, height: 512 }
}: AIImageGeneratorProps) => {
  const [apiKey, setApiKey] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateImage = async () => {
    if (!apiKey) {
      toast.error('Please enter your Runware API key');
      return;
    }

    setIsGenerating(true);
    try {
      const runware = new RunwareService(apiKey);
      const result: GeneratedImage = await runware.generateImage({
        positivePrompt: prompt,
        width: size.width,
        height: size.height,
        numberResults: 1,
        outputFormat: 'WEBP'
      });

      onImageGenerated(result.imageURL);
      toast.success('Image generated successfully!');
    } catch (error) {
      console.error('Error generating image:', error);
      toast.error('Failed to generate image. Please check your API key and try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Runware API Key
        </label>
        <Input
          type="password"
          placeholder="Enter your Runware API key"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          className="w-full"
        />
        <p className="text-xs text-gray-500">
          Get your API key from <a href="https://runware.ai/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">runware.ai</a>
        </p>
      </div>
      
      <Button 
        onClick={generateImage} 
        disabled={isGenerating || !apiKey}
        className="w-full bg-orange-500 hover:bg-orange-600"
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Generating...
          </>
        ) : (
          buttonText
        )}
      </Button>
    </div>
  );
};

export default AIImageGenerator;
