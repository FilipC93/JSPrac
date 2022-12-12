import { rest } from 'msw'

export const handlers = [
    rest.get('http://localhost:3030', (req, res, ctx) => { //* request, resolve, context
        //TODO: Look DOCS
        ctx.json([
            { name: 'Choco', image: 'whatever/choco'},
            {name: 'Vanilla', image: 'whatver/vanilla'}
        ])
    }),
];