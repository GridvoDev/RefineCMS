#!/bin/bash
kubectl -n gridvo get svc | grep -q refinecms
if [ "$?" == "1" ];then
	kubectl create -f refinecms-service.yaml --record
	kubectl -n gridvo get svc | grep -q refinecms
	if [ "$?" == "0" ];then
		echo "refinecms-service install success!"
	else
		echo "refinecms-service install fail!"
	fi
else
	echo "refinecms-service is exist!"
fi
kubectl -n gridvo get pods | grep -q refinecms
if [ "$?" == "1" ];then
	kubectl create -f refinecms-deployment.yaml --record
	kubectl -n gridvo get pods | grep -q refinecms
	if [ "$?" == "0" ];then
		echo "refinecms-deployment install success!"
	else
		echo "refinecms-deployment install fail!"
	fi
else
	kubectl delete -f refinecms-deployment.yaml
	kubectl -n gridvo get pods | grep -q refinecms
	while [ "$?" == "0" ]
	do
	kubectl -n gridvo get pods | grep -q refinecms
	done
	kubectl create -f refinecms-deployment.yaml --record
	kubectl -n gridvo get pods | grep -q refinecms
	if [ "$?" == "0" ];then
		echo "refinecms-deployment update success!"
	else
		echo "refinecms-deployment update fail!"
	fi
fi
