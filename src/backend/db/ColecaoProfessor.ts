import { db } from '../config/firebase'
import {
  collection,
  doc,
  getDocs,
  setDoc,
  deleteDoc,
  addDoc,
} from 'firebase/firestore'
import Professor from '../../core/Professor'
import ProfessorRepositorio from '../../core/ProfessorRepositorio'

export default class ColecaoProfessor implements ProfessorRepositorio {
  #conversor = {
    toFirestore(professor: Professor) {
      return {
        matricula: professor.matricula,
        nome: professor.nome,
        email: professor.email,
        qualificacao: professor.qualificacao,
        eixo: professor.eixo,
      }
    },
    fromFirestore(snapshot: any): Professor {
      const dados = snapshot.data()
      return new Professor(
        dados.matricula,
        dados.nome,
        dados.email,
        dados.qualificacao,
        dados.eixo
      )
    },
  }

  async salvar(professor: Professor): Promise<Professor> {
    const colecao = this.colecao()
    if (professor?.matricula) {
      await setDoc(
        doc(colecao, professor.matricula),
        this.#conversor.toFirestore(professor)
      )
      return professor
    } else {
      const docRef = await addDoc(
        colecao,
        this.#conversor.toFirestore(professor)
      )
      return new Professor(
        docRef.id,
        professor.nome,
        professor.email,
        professor.qualificacao,
        professor.eixo
      )
    }
  }

  // async excluir(professor: Professor): Promise<void> {
  //   const colecao = this.colecao();
  //   await deleteDoc(doc(colecao, professor.matricula));
  // }

  async excluir(professor: Professor): Promise<void> {
    if (!professor.matricula || professor.matricula.trim() === '') {
      throw new Error('A matrícula do professor está vazia ou indefinida.')
    }

    const professorRef = doc(db, 'professores', professor.matricula)
    await deleteDoc(professorRef)
  } 

  async obterTodos(): Promise<Professor[]> {
    const querySnapshot = await getDocs(this.colecao())
    return (
      querySnapshot.docs.map((doc) => this.#conversor.fromFirestore(doc)) ?? []
    )
  }

  private colecao() {
    return collection(db, 'professores')
  }
}
