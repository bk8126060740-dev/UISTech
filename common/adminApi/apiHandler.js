import { NextResponse } from "next/server";

export const handleResponse = async (request) => {
    try {
        const response = await request;
        return response.data;
    } catch (error) {
        console.error('Request failed', error);
        throw error.response.data;
    }
}

export const responseHandle = (data, status, message, success) => {
    if (data !== null) {
        return NextResponse.json({ data, message, status, success }, { status });
    } else {
        return NextResponse.json({ message, status, success }, { status });
    }
}