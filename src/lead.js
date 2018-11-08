import React from 'react'
import { Button, Card, Header, Icon, Image, Progress } from 'semantic-ui-react'




const CardExampleCard = () => (
    <div style={{'paddingLeft':'10px','paddingTop':'10px'}}>
  <Card style={{'width':'500px', 'overflow':'hidden','borderRadius':'25px'}}>
		    <Card.Content textAlign="center" style={{'backgroundColor':'#2185d0','color':'white','fontSize':'18pt'}}>Smart Lead</Card.Content>	
    <Card.Content>
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' size='small' circular style={{'display':'block','margin':'0 auto'}} />

      <Card.Header style={{'paddingTop':'16px'}} textAlign='center'>Edi</Card.Header>
      <Card.Meta textAlign='center'>
        <span className='date'>bla@email.com</span>
      </Card.Meta>
    <Progress color='blue' progress='value' value={80}>Temperatura do lead</Progress>
      <Card.Description textAlign="center" style={{'color':'#8c8c8c', 'fontWeight':'800', 'fontSize':'14pt'}}>Executivo de vendas | Ubicity</Card.Description>
      <Card.Description textAlign="center"style={{'color':'#8c8c8c', 'fontWeight':'800', 'fontSize':'14pt'}}>38 anos | Brasília/DF</Card.Description>
    </Card.Content>
 <div className='ui three buttons'>
          <Button  size='medium'  style={{'fontSize':'18pt','border':'1px solid #595959','backgroundColor':'#f2f2f2'}} >
           16<h5>Contatos</h5>
          </Button>
          <Button  size='medium'  style={{'fontSize':'18pt','border':'1px solid #595959','backgroundColor':'#f2f2f2'}} >
					12<h5>Imóveis vistos</h5>
          </Button>
          <Button  size='medium'  style={{'fontSize':'18pt','border':'1px solid #595959','backgroundColor':'#f2f2f2'}} >
					4<h5>Dias buscando</h5>
          </Button>
        </div>
		    <Card.Content textAlign="center" style={{'backgroundColor':'#2185d0','color':'white','fontSize':'18pt'}}>(61) 99271 - 1161</Card.Content>	
  </Card></div>
)

export default CardExampleCard

