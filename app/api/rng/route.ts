import { NextResponse } from 'next/server';

function getSecureRandomInt(min: number, max: number) {
    const range = max - min + 1;
    const array = new Uint32Array(1);
    crypto.getRandomValues(array);
    return (array[0] % range) + min;
}

export function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const minParam = searchParams.get('min');
    const maxParam = searchParams.get('max');
    const amountParam = searchParams.get('amount') || '1';

    if (!minParam || !maxParam) {
        return NextResponse.json(
            { error: 'Missing required query parameters: min and max' },
            { status: 400 }
        );
    }

    const min = Number(minParam);
    const max = Number(maxParam);
    const amount = Number(amountParam);

    if (isNaN(min) || isNaN(max)) {
        return NextResponse.json(
            { error: 'Invalid query parameters: min and max must be valid numbers' },
            { status: 400 }
        );
    }

    if (isNaN(amount) || amount < 1 || amount > 1000) {
        return NextResponse.json(
            { error: 'Invalid query parameter: amount must be a valid number between 1 and 1000' },
            { status: 400 }
        );
    }

    if (min > max) {
        return NextResponse.json(
            { error: 'Invalid logic: min cannot be greater than max' },
            { status: 400 }
        );
    }

    if (amount === 1) {
        const randomNumber = getSecureRandomInt(min, max);
        return NextResponse.json({
            min,
            max,
            number: randomNumber,
        });
    }

    const randomNumbers = [];
    for (let i = 0; i < amount; i++) {
        randomNumbers.push(getSecureRandomInt(min, max));
    }

    return NextResponse.json({
        min,
        max,
        amount,
        numbers: randomNumbers,
    });
}
