import { NextResponse } from 'next/server';
import { getData } from '@/lib/dictionary';
import { Locale } from '@/i18n.config';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const localeParam = searchParams.get('locale');

  if (!localeParam) {
    return NextResponse.json({ error: 'Missing locale parameter' }, { status: 400 });
  }

  // Cast the locale parameter to the Locale type
  const locale = localeParam as Locale;

  const data = await getData(locale);
  return NextResponse.json(data);
}