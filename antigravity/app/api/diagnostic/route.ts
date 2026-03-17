import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({
        domain: !!process.env.MICROCMS_SERVICE_DOMAIN,
        key: !!process.env.MICROCMS_API_KEY,
        node_env: process.env.NODE_ENV,
    });
}
