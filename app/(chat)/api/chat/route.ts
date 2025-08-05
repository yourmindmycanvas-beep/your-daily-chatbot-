import { NextRequest } from 'next/server';
import { ChatSDKError } from '@lib/errors';
import { convertToUIMessage, generateTitleFromUserMessage } from '@lib/ai/prompts';

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const { message } = json;

    const title = await generateTitleFromUserMessage({ message });

    return Response.json({
      message: convertToUIMessage('This is a placeholder reply.'),
      title,
    });
  } catch (err) {
    return new ChatSDKError('server_error:chat').toResponse();
  }
}
