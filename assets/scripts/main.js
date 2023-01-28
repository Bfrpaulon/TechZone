$.ajax({
    url: "http://api.weatherstack.com/current",
    data: {
      query: "São Paulo",
      access_key: "e820775a94cbe7b021a59e222f8af90b"
    },
    success: function(data) {
      console.log(data);
      // aqui você pode manipular e exibir os dados recebidos
    }
  });
  