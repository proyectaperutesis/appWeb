const IDUSUARIO_KEY = 'sgplIDUSUARIO';
const NOMBREUSUARIO_KEY = 'sgplNOMBREUSUARIO';
const PERSONA_KEY = 'sgplPERSONA';
const IDROL_KEY = 'sgplROL'

export function removeIdUsuario() {
    window.localStorage.removeItem(IDUSUARIO_KEY);
}

export function saveIdUsuario(IdUsuario: string) {
    window.localStorage.removeItem(IDUSUARIO_KEY);
    window.localStorage.setItem(IDUSUARIO_KEY, IdUsuario);
}

export function getIdUsuario(): string {
    return localStorage.getItem(IDUSUARIO_KEY);
}

export function removeNombreUsuario() {
    window.localStorage.removeItem(NOMBREUSUARIO_KEY);
}

export function saveNombreUsuario(NombreUsuario: string) {
    window.localStorage.removeItem(NOMBREUSUARIO_KEY);
    window.localStorage.setItem(NOMBREUSUARIO_KEY, NombreUsuario);
}

export function getNombreUsuario(): string {
    return localStorage.getItem(NOMBREUSUARIO_KEY);
}

export function removePersona() {
    window.localStorage.removeItem(PERSONA_KEY);
}

export function savePersona(persona: string) {
    window.localStorage.removeItem(PERSONA_KEY);
    window.localStorage.setItem(PERSONA_KEY, persona);
}

export function getPersona(): string {
    return localStorage.getItem(PERSONA_KEY);
}

export function removeIdRol() {
    window.localStorage.removeItem(IDROL_KEY);
}

export function saveIdRol(idRol: string) {
    window.localStorage.removeItem(IDROL_KEY);
    window.localStorage.setItem(IDROL_KEY, idRol);
}

export function getIdRol(): string {
    return localStorage.getItem(IDROL_KEY);
}
