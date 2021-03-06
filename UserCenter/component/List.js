import React from 'react';

export default function List(props) {
  let handelDel = function (e) {
    let id = e.currentTarget.getAttribute('id');
    props.onHandleDel(id,props.type,props.index);
  };
 return (
    <dl className="resList">
      <dd className="resList_item" style={{width: '10%'}} title={props.name}>{props.name}</dd>
      <dd className="resList_item" style={{width: '10%'}} title={props.item2}>{props.item1}</dd>
      <dd className="resList_item" style={{width: '20%'}} title={props.item1}>{props.item2}</dd>
      <dd className="resList_item" style={{width: '25%'}} title={props.item3}>{props.item3}</dd>
      <dd className="resList_item" style={{width: '20%'}} title={props.item4}>{props.item4}</dd>
      <dd className="resList_item" style={{width: '10%'}}><a href="script:;" onClick={handelDel} id={props.mb_id}>删除</a></dd>
    </dl>
  );
}
