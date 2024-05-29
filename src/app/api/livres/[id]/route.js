import { HttpStatusCode } from 'axios';
import connectDB from '@/lib/connectDB';
import Livre from '@/models/Livre';

import { NextResponse } from 'next/server';
export async function GET(_, { params }) {
try {
await connectDB();
const livre = await Livre.findById(params.id).populate('auteurs').populate('specialite').populate('maised');
if (livre) {
return NextResponse.json( livre );
}
return NextResponse.json({ message: `Livre ${params.id} not found` }, {
status: HttpStatusCode.NotFound });
} catch (error) {
return NextResponse.json({ message: error }, { status:
HttpStatusCode.BadRequest });
}
}
export async function PUT(req, { params }) {

    try {
    await connectDB();
    const livre = await Livre.findById(params.id);
    if (livre) {
    const body= await req.json();
    
    livre.isbn = body.isbn;
    livre.titre = body.titre;
    livre.annedition = body.annedition;
    livre.prix= body.prix;
    livre.couverture= body.couverture;
    livre.qtestock = body.qtestock;
    livre.specialite= body.specialite;
    livre.maised= body.maised;
    livre.livres= body.livres;

   
    livre.save();
    return NextResponse.json( livre );
    }
    return NextResponse.json({ message: `Livre ${params.id} not found`
    
    }, { status: HttpStatusCode.NotFound });
    
    } catch (error) {
    return NextResponse.json({ message: error }, { status:
    
    HttpStatusCode.BadRequest });
    
    }
    }
    export async function DELETE(_, { params }) {
        try {
        await connectDB();
        const livre = await Livre.findById(params.id);
        if (livre) {
        await Livre.findByIdAndDelete(livre._id);
        return NextResponse.json({ message: `Livre ${params.id} has been
        
        deleted` });
        }
        
        return NextResponse.json({ message: `Livre ${params.id} not found` }, {
        status: HttpStatusCode.NotFound });
        } catch (error) {
        return NextResponse.json({ message: error }, { status:
        HttpStatusCode.BadRequest });
        }
        }