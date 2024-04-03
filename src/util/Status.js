export const DONE = 'done';
export const RECALL = 'recall';
export const CONNECTED = 'connected';
export const D2D = 'd2d';

/* This also represents the order of the labels */
export const Status = [DONE, CONNECTED, RECALL, D2D];

export const Translations = {
  [DONE]: 'Fertig',
  [RECALL]: 'Rückruf notwendig',
  [CONNECTED]: 'Weiterverbunden',
  [D2D]: 'D2D Fall',
};

/*
    Background colors:
        bg-success   -> green
        bg-warning   -> yellow
        bg-danger    -> red
        bg-primary   -> blue
        bg-secondary -> gray
        bg-info      -> light-blue
        bg-dark      -> dark-gray
        bg-light     -> light-gray

    Text colors are the same:
        replace 'bg' with 'text'
        e.g: bg-light -> text-light
 */
export const ColorMap = {
  [DONE]: 'bg-success text-light',
  [RECALL]: 'bg-warning text-dark',
  [CONNECTED]: 'bg-success text-light',
  [D2D]: 'bg-light text-dark',
};