import { NextResponse } from 'next/server';

export function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const minParam = searchParams.get('min');
    const maxParam = searchParams.get('max');

    if (!minParam || !maxParam) {
        return NextResponse.json(
            { error: 'Missing required query parameters: min and max' },
            { status: 400 }
        );
    }

    const min = Number(minParam);
    const max = Number(maxParam);

    if (isNaN(min) || isNaN(max)) {
        return NextResponse.json(
            { error: 'Invalid query parameters: min and max must be valid numbers' },
            { status: 400 }
        );
    }

    if (min > max) {
        return NextResponse.json(
            { error: 'Invalid logic: min cannot be greater than max' },
            { status: 400 }
        );
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return NextResponse.json({
        min,
        max,
        number: randomNumber,
    });
}
