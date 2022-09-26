<template>
  <div>
    <h2 v-html="title"></h2>
    <button @click="insert = !insert" class="mb-2">Criar</button>

    <div v-show="insert">
      <input type="text" v-model="newAluno.nome" required placeholder="Nome do Aluno" />


      <input type="text" v-model="newAluno.endereco" required placeholder="Endereço" />

      <label ><strong >Estado :</strong>
      <select  name="select" v-model="newAluno.estado">
        <option value="Rio de Janeiro">Rio de Janeiro</option>
        <option value="São Paulo">São Paulo</option>
        <option value="Minas Gerais">Minas Gerais</option>
        <option value="Espírito Santo">Espírito Santo</option>
      </select>
    </label>

      <button :disabled="((newAluno.nome.length && newAluno.endereco.length) < 3)"
        @click="alunos.push({ ...newAluno })">
        Salvar aluno
      </button>
      <h3>
        alunos
        <span v-show="alunos.length > 0">{{ alunos.length }}</span>
      </h3>

      <table class="table">
        <thead>
          <tr>
            <td scope="col">
              Nome
            </td>
            <td scope="col">
              Endereço
            </td>
            <td scope="col">
              Estado
            </td>
            <td scope="col">
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(aluno, key) in alunos" :key="aluno.nome">
            <td>{{ aluno.nome }}</td>
            <td>{{ aluno.endereco }}</td>
            <td>{{ aluno.estado}}</td>
            <td><button @click="deletar(key)">Deletar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "FormPage",
  data() {
    return {
      title: '<span> Cadastro de alunos </span>',
      insert: false,
      alunos: [],
      newAluno: {
        nome: "",
        endereco: '',
        estado: 'Rio de Janeiro'
      },
    }
  },
  methods:{
    deletar(nome){
      const aux = [...this.alunos];
      aux.splice(nome, 1);
      this.alunos = aux;
    }
  }
}
</script>

<style>


table {
	border-collapse: collapse;
    font-family: Tahoma, Geneva, sans-serif;
}
table td {
	padding: 15px;
}
table thead td {
	background-color: #54585d;
	color: #ffffff;
	font-weight: bold;
	font-size: 13px;
	border: 1px solid #54585d;
}
table tbody td {
	color: #636363;
	border: 1px solid #dddfe1;
}
table tbody tr {
	background-color: #f9fafb;
}
table tbody tr:nth-child(odd) {
	background-color: #ffffff;
}
</style>