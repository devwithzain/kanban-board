import { Dispatch, SetStateAction } from "react";

export type CardType = {
   id: string;
   title: string;
};

export type ColumnType = "backlog" | "todo" | "inProgress" | "complete";

export type TcolumnProps = {
   title: string;
   headingColor: string;
   column: string;
   cards: CardType[];
   setCards: Dispatch<SetStateAction<CardType[]>>;
};

export type TburnBarrelProps = {
   setCards: Dispatch<SetStateAction<CardType[]>>;
};

export type TdropIndicatorProps = {
   beforeId: string | null;
   column: ColumnType;
};

export type TaddCardProps = {
   column: ColumnType;
   setCards: Dispatch<SetStateAction<CardType[]>>;
};

type CardTypes = {
   id: string;
   column: ColumnType;
   title: string;
};

export type TcardProps = {
   id: string;
   column: ColumnType;
   title: string;
   handleDragStart: (e: MouseEvent | TouchEvent | PointerEvent, card: CardTypes) => void;
};