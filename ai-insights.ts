import type { NextApiRequest, NextApiResponse } from 'next';
import { OpenAIApi, Configuration } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ error: 'Missing prompt' });

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: "system", content: "You are a helpful analytics assistant." }, { role: "user", content: prompt }],
    });
    const aiResponse = completion.data.choices[0].message?.content ?? '';
    res.status(200).json({ result: aiResponse });
  } catch (err) {
    res.status(500).json({ error: 'AI Error' });
  }
}