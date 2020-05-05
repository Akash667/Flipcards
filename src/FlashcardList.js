import React from 'react'
import Flashcard from './Flashcard'


export default function FlashcardList({ flashcards }) {
    return (
        <div classNam="card-grid">
            {flashcards.map(flashcard=>{
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}    
        </div>
    )
}
