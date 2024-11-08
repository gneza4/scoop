import React from 'react';

interface TextInputBoxProps {
    type: 'text' | 'password';
    ref: React.RefObject<HTMLInputElement>;
}


export default function TextInputBox(props: TextInputBoxProps) {
    return (
        <input
            type={props.type}
            className={"flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"}
            ref={props.ref}
        />
    );
};
