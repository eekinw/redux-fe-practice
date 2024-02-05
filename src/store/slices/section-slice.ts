import { Sections } from '@/utils/interfaces/index';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

interface SectionsState {
    sections: Sections[];
}

const initialState: SectionsState = {
    sections: [],
};

const sectionsSlice = createSlice({
    initialState,
    name: 'section',
    reducers: {
        addSection: (state: SectionsState) => {
            const newSection = {
                id: v4(),
                number: state.sections.length + 1,
                isCompleted: false,
            };
            state.sections.push(newSection);
        },
        deleteSection: (state: SectionsState, action: PayloadAction<string>) => {
            state.sections = state.sections.filter((section) => section.id !== action.payload);
        },
        toggleCompletion: (state: SectionsState, action: PayloadAction<string>) => {
            const section = state.sections.find((section) => section.id === action.payload);
            if (section) {
                section.isCompleted = !section.isCompleted;
            }
        }
    }
});

export const { addSection, deleteSection, toggleCompletion } = sectionsSlice.actions

export default sectionsSlice.reducer